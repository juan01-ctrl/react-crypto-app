
type PropTypes = {
    children: JSX.Element
}

const BasicLayout = ({ children }: PropTypes) => {
  return (
    <div className="px-4 py-2 container">{children}</div>
  )
}

export default BasicLayout