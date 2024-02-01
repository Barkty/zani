import { paragraph } from "components/button"

interface CardProps {
    flex: 'row' | 'column',
    icon: string,
    title: string,
}

export const CardFlex = ({ flex, icon, title }: CardProps) => {
    return (
        <div className={`p-4 items-center justify-around bg-white hover:drop-shadow-xl mb-3.5 duration-200 ease-in cursor-pointer ${flex === 'column' ? 'flex-col h-[248px] w-2/6' : 'flex h-[139px]'}`}>
            <img src={icon} alt="An icon depicting insurance" className={`${flex === 'column' && 'mb-3'}`}/>
            <div className={`w-5/6 ${flex === 'column' && 'h-[70%] flex flex-col justify-around'}`}>
                <p className="font-open font-semibold text-xl">{title}</p>
                <p className={paragraph}>Zani.co ensures her customers a good insurance policy to protect them against risk inturn for regular payment of premium.</p>
            </div>
        </div>
    )
}

