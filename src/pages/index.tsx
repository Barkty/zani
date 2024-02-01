import Layout from "layout";
import hero from 'assets/hero.svg'
import flutter from 'assets/flutter.svg'
import facebook from 'assets/facebook.svg'
import toyota from 'assets/toyota.svg'
import circle from 'assets/circle.svg'
import about from 'assets/about.svg'
import why from 'assets/why.svg'
import protect from 'assets/protect.svg'
import save from 'assets/save.svg'
import discount from 'assets/discount.svg'
import car from 'assets/car.svg'
import insure from 'assets/insure.svg'
import home from 'assets/home.svg'
import profile1 from 'assets/profile-1.svg'
import profile2 from 'assets/profile-2.svg'
import profile3 from 'assets/profile-3.svg'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Button, paragraph } from "components/button";
import { Divider } from "components/divider";
import { CardFlex, ClientCard } from "components/card";

const section = "grid grid-cols-2 md:grid-cols-1 h-full mb-20 md:mb-10"

const Home = () => {
    return (
        <Layout>
            <>
                <div
                className="w-full h-screen bg-[#fff] bg-center bg-no-repeat bg-cover mb-8"
                style={{
                    backgroundImage: `url(${hero})`,
                }}>
                    
                </div>
                <div className="px-20 md:px-4">
                    {/* Sponsors */}
                    <div className="w-full h-[51px] flex items-center justify-between">
                        <img src={flutter} alt="Flutter" className="w-1/6"/>
                        <img src={toyota} alt="Toyota Brand" className="w-1/6"/>
                        <img src={facebook} alt="Facebook Brand" className="w-1/6"/>
                        <img src={circle} alt="CircleCi Brand" className="w-1/6"/>
                    </div>
                    <div className="h-[101px] md:h-[40px]"/>
                    {/* About Us */}
                    <div className={section}>
                        {/* Left */}
                        <div>
                            <Divider />
                            <p className="font-open text-4xl font-semibold mb-2 md:text-lg"><span className="text-[#061FFF] font-bold">About</span> Us At <span className="text-[#061FFF] font-bold">Z</span>ani.co</p>
                            <p className={paragraph}>Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
                            <img src={about} alt="A picture of a lady smiling" className="relative bottom-6"/>
                        </div>
                            {/* Right */}
                        <div className="flex items-end">
                            <div className="w-5/6 md:w-full h-fit">
                                <p className="font-open font-semibold text-4xl md:text-lg mb-2">You Pay, We Insure Your Deeds</p>
                                <p className={paragraph}>Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
                                <div className="flex items-center p-2.5">
                                    <BsFillPatchCheckFill color="#061FFF" size={20} className="mr-2"/>
                                    <p className="font-pop font-normal text-base md:text-sm text-black text-justify">We are a registered organisation</p>
                                </div>
                                <div className="flex items-center p-2.5">
                                    <BsFillPatchCheckFill color="#061FFF" size={20} className="mr-2"/>
                                    <p className="font-pop font-normal text-base md:text-sm text-black text-justify">Our life insurance policy is flexible</p>
                                </div>
                                <div className="flex items-center p-2.5">
                                    <BsFillPatchCheckFill color="#061FFF" size={20} className="mr-2"/>
                                    <p className="font-pop font-normal text-base md:text-sm text-black text-justify">Over 5years in the insurance business</p>
                                </div>
                                <div className="flex items-center p-2.5 mb-3">
                                    <BsFillPatchCheckFill color="#061FFF" size={20} className="mr-2"/>
                                    <p className="font-pop font-normal text-base md:text-sm text-black text-justify">We provide excellent protections for your deeds</p>
                                </div>
                                <Button type="button" onClick={() => null} variant="secondary">Register Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* Why */}
                    <div className={section}>
                        {/* Left */}
                        <div>
                            <div className="h-[30%]">
                                <Divider />
                                <p className="font-open text-4xl font-semibold mb-2 md:text-lg"><span className="text-[#061FFF] font-bold">Why</span> We Are Your <span className="text-[#061FFF] font-bold">Preferred</span> Choice</p>
                                <p className={paragraph}>Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
                            </div>
                            <div className="flex items-end">
                                <div className="h-[70%] w-5/6 md:w-full">
                                    <CardFlex flex="row" icon={protect} title="All-round Protection"/>
                                    <CardFlex flex="row" icon={save} title="High Saving Potentials"/>
                                    <CardFlex flex="row" icon={discount} title="5% Discount After 4years"/>
                                </div>
                            </div>
                        </div>
                        {/* Right */}
                        <div className="flex items-end">
                            <img src={why} alt="A picture of a guy smiling"/>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="w-full mb-20">
                        <div className="w-3/6 mb-10 md:w-full">
                            <Divider />
                            <p className="font-open text-4xl font-semibold mb-2 md:text-lg"><span className="text-[#061FFF] font-bold">Services</span> We Render At <span className="text-[#061FFF] font-bold">Z</span>ani.co</p>
                            <p className={paragraph}>Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
                        </div>
                        <div className="flex md:flex-col items-center justify-between w-full">
                            <CardFlex flex="column" icon={car} title="Car Issurance"/>
                            <CardFlex flex="column" icon={insure} title="Life Issurance"/>
                            <CardFlex flex="column" icon={home} title="Home Issurance"/>
                        </div>
                    </div>

                    {/* Testimonies */}
                    <div className="w-full mb-20">
                        <div className="w-3/6 md:w-full mb-10">
                            <Divider />
                            <p className="font-open text-4xl font-semibold mb-2 md:text-lg"><span className="text-[#061FFF] font-bold">Our</span> Clients Know The <span className="text-[#061FFF] font-bold">Best</span></p>
                            <p className={paragraph}>Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
                        </div>
                        <div className="flex md:flex-col items-center justify-between w-full">
                            <ClientCard flex="column" icon={profile1} title="Daniel Edwin"/>
                            <ClientCard flex="column" icon={profile2} title="Austin Peters"/>
                            <ClientCard flex="column" icon={profile3} title="Susana James"/>
                        </div>
                    </div>
                </div>
            </>
        </Layout>
    )
}

export default Home