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
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Button, paragraph } from "components/button";
import { Divider } from "components/divider";
import { CardFlex } from "components/card";

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
                <div className="px-20 md:px-10">
                    {/* Sponsors */}
                    <div className="w-full h-[51px] flex items-center justify-between">
                        <img src={flutter} alt="Flutter"/>
                        <img src={toyota} alt="Toyota Brand"/>
                        <img src={facebook} alt="Facebook Brand"/>
                        <img src={circle} alt="CircleCi Brand"/>
                    </div>
                    <div className="h-[101px]"/>
                    {/* About Us */}
                    <div className="grid grid-cols-2 h-full mb-20">
                        {/* Left */}
                        <div>
                            <Divider />
                            <p className="font-open text-4xl font-semibold mb-2"><span className="text-[#061FFF] font-bold">About</span> Us At <span className="text-[#061FFF] font-bold">Z</span>ani.co</p>
                            <p className={paragraph}>Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
                            <img src={about} alt="A picture of a lady smiling" className="relative bottom-6"/>
                        </div>
                            {/* Right */}
                        <div className="flex items-end">
                            <div className="w-5/6 h-fit">
                                <p className="font-open font-semibold text-4xl mb-2">You Pay, We Insure Your Deeds</p>
                                <p className={paragraph}>Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
                                <div className="flex items-center p-2.5">
                                    <BsFillPatchCheckFill color="#061FFF" size={20} className="mr-2"/>
                                    <p className="font-pop font-normal text-base text-black text-justify">We are a registered organisation</p>
                                </div>
                                <div className="flex items-center p-2.5">
                                    <BsFillPatchCheckFill color="#061FFF" size={20} className="mr-2"/>
                                    <p className="font-pop font-normal text-base text-black text-justify">Our life insurance policy is flexible</p>
                                </div>
                                <div className="flex items-center p-2.5">
                                    <BsFillPatchCheckFill color="#061FFF" size={20} className="mr-2"/>
                                    <p className="font-pop font-normal text-base text-black text-justify">Over 5years in the insurance business</p>
                                </div>
                                <div className="flex items-center p-2.5 mb-3">
                                    <BsFillPatchCheckFill color="#061FFF" size={20} className="mr-2"/>
                                    <p className="font-pop font-normal text-base text-black text-justify">We provide excellent protections for your deeds</p>
                                </div>
                                <Button type="button" onClick={() => null} variant="secondary">Register Now</Button>
                            </div>
                        </div>
                    </div>

                    {/* Why */}
                    <div className="grid grid-cols-2 h-full mb-20">
                        {/* Left */}
                        <div>
                            <div className="h-[30%]">
                                <Divider />
                                <p className="font-open text-4xl font-semibold mb-2"><span className="text-[#061FFF] font-bold">Why</span> We Are Your <span className="text-[#061FFF] font-bold">Preferred</span> Choice</p>
                                <p className={paragraph}>Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
                            </div>
                            <div className="flex items-end">
                                <div className="h-[70%] w-5/6">
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
                        <div className="w-3/6 mb-10">
                            <Divider />
                            <p className="font-open text-4xl font-semibold mb-2"><span className="text-[#061FFF] font-bold">Services</span> We Render At <span className="text-[#061FFF] font-bold">Z</span>ani.co</p>
                            <p className={paragraph}>Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <CardFlex flex="column" icon={car} title="Car Issurance"/>
                            <CardFlex flex="column" icon={insure} title="Life Issurance"/>
                            <CardFlex flex="column" icon={home} title="Home Issurance"/>
                        </div>
                    </div>

                    {/* Testimonies */}
                    <div className="w-full">
                        <div className="w-3/6 mb-10">
                            <Divider />
                            <p className="font-open text-4xl font-semibold mb-2"><span className="text-[#061FFF] font-bold">Our</span> Clients Know The <span className="text-[#061FFF] font-bold">Best</span></p>
                            <p className={paragraph}>Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <CardFlex flex="column" icon={car} title="Car Issurance"/>
                            <CardFlex flex="column" icon={insure} title="Life Issurance"/>
                            <CardFlex flex="column" icon={home} title="Home Issurance"/>
                        </div>
                    </div>
                </div>
            </>
        </Layout>
    )
}

export default Home