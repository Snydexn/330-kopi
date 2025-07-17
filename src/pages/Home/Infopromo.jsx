import { Link } from "react-router-dom"

const Infopromo = () => {
  return (
    <Link to="/informasi">
     <section className="bg-[#5D3D29] text-white py-1 rounded-md text-2xl" style={{ fontFamily: 'Want Coffee' }}>
      <div className="text-center">
        <button className="">Info Promo</button>
      </div>
    </section>
    </Link>
  )
}

export default Infopromo