import { TypeAnimation } from "react-type-animation";

const Navbar = () =>
{
    return (
        <>
            <nav className="navbar bg-dark" >
                <div className="container-fluid">
                    <span className="navbar-brand h1 mb-0 text-light mx-auto">
                        <TypeAnimation
                            sequence={[
                                '',
                                1000,
                                '₹ Xpense',
                                1000,
                                '₹ Xpense /-',
                                1000,
                            ]}
                            wrapper="span"
                            speed={1}
                            deletionSpeed={10}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar