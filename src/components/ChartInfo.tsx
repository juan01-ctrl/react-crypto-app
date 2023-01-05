import { ICoinChartRes } from "../interfaces/ICoinChart"
import { useGetCoinChartByIdQuery } from "../services/crypto"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment";
import Loader from "./Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


type PropTypes = {
 id: string | undefined,
}

const ChartInfo = ({ id }: PropTypes) => {
  const { data, isLoading } = useGetCoinChartByIdQuery<ICoinChartRes>(id)
  const coinPriceData = data?.prices?.map((price) => ({
    x: price?.[0],
    y: price?.[1].toFixed(2)
  })) 
  const options = {
    responsive: true,
    elements: {
      point:{
          radius: 2
      }
  }
  }
  const chartData = {
    labels: coinPriceData?.map((value) => moment(value.x).format('MMM-DD-YY')),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinPriceData?.map((value) => value.y),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  }
  if (isLoading) {
   return (<div style={{ height: '50vh'}}><Loader /></div>) 
  }
  return (
    <div className="w-100 mb-3">
      <Line options={options} data={chartData} />
    </div>
  )
}

export default ChartInfo