import WebHeader from "../../../../components/webHeader/webHeader"
import StreetHawker from "../streetHawker/streetHawker"
import Widow from "../widow/widow"


const Conditional = (props) => {
    const data = props?.location?.state?.data
    console.log(data)
  return (
    <div>
        <WebHeader />

        {data?.category === "widow" ? <Widow data={data} /> : <StreetHawker data={data} />}
    </div>
  )
}

export default Conditional