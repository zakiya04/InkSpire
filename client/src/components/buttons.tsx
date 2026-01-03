type ButtonsProps = {
  primaryText: string;
  secondaryText: string;
};
const Buttons = ({primaryText,secondaryText}:ButtonsProps) => {
  return (
    <div className="flex items-center justify-center gap-6">
       <button className="px-6 py-3 bg-emerald-400 rounded-xl text-center mt-6 text-gray-600 hover:bg-emerald-600">{primaryText}</button>
       <button className="px-6 py-3 bg-emerald-400 rounded-xl text-center mt-6 text-gray-600 hover:bg-emerald-600">{secondaryText}</button>
    </div>
  )
}

export default Buttons