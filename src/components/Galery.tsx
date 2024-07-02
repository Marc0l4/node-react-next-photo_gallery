import { Imgs } from "@/types/Imgs";

type Props = {
    img: Imgs;
    onClick: () => void;
}

export const Galery = ({ img, onClick }: Props) => {
    return (
        <img onClick={onClick} key={img.id} className="w-full h-60 cursor-pointer hover:opacity-80" src={`/assets/${img.url}`} alt={img.name} />
    );
}