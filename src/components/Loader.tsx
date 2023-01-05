import { Spinner } from "reactstrap"
import classnames from 'classnames'

type PropTypes = {
    fullCenter?: boolean 
}
const Loader = ({ fullCenter }: PropTypes) => {
    return (
        <div className={classnames('w-100 d-flex justify-content-center',{
            'position-absolute top-50 start-50 translate-middle': fullCenter
        })}>
            <Spinner />
        </div>
    )
}

export default Loader