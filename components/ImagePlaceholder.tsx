import { Image as ImageIcon } from "lucide-react";

export default function ImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center bg-neutral-900 border outline-dashed outline-2 outline-neutral-800 -outline-offset-8 text-neutral-600 ${className} !grayscale-0`}>
      <ImageIcon size={48} className="mb-3 opacity-30" />
      <span className="text-xs uppercase tracking-widest font-bold opacity-50">Image Space</span>
    </div>
  );
}
