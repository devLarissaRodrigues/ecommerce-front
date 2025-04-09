import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard | null;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="p-4 sm:p-6 lg:p-8 rounded-xl bg-gray-100 text-center">
        <p className="text-gray-500 text-sm">Billboard não encontrado</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 bg-black/30">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
