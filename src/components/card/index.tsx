import { paragraph } from "components/button"

interface CardProps {
    flex: 'row' | 'column',
    icon: string,
    title: string,
}

export const CardFlex = ({ flex, icon, title }: CardProps) => {
    return (
        <div className={`p-4 md:p-2 items-center justify-around bg-white hover:drop-shadow-xl mb-3.5 duration-200 ease-in cursor-pointer ${flex === 'column' ? 'flex-col h-[248px] w-2/6 md:w-full' : 'flex h-[139px]'}`}>
            <img src={icon} alt="An icon depicting insurance" className={`${flex === 'column' && 'mb-3'}`}/>
            <div className={`w-5/6 md:w-full ${flex === 'column' && 'h-[70%] flex flex-col justify-around'}`}>
                <p className="font-open font-semibold text-xl md:text-base">{title}</p>
                <p className={`${paragraph} md:text-sm`}>Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
            </div>
        </div>
    )
}

export const ClientCard = ({ icon, title }: CardProps) => {
    return (
        <div className="flex w-2/6 md:w-full flex-col justify-center items-center mb-3.5 duration-200 ease-in cursor-pointer h-[190px] hover:drop-shadow-xl">
            <img src={icon} alt="Client's Profile" className="rounded-full h-[50px] w-[50px] relative top-3"/>
            <div className="bg-white p-6 flex flex-col justify-center items-center md:mb-6.5">
                <p className={paragraph}>Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
                <p className="font-open font-semibold text-xl text-center">{title}</p>
            </div>
        </div>
    )
}