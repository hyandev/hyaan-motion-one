import { toolbarActions } from "./data/toolbarActions";

const ActionToolbar = () => {
  return (
    <div className="mt-2 mb-4 flex justify-center gap-4 opacity-50">
      {toolbarActions.map((item) => (
        <div key={item.id} className="space-x-1 text-[10px]">
          <item.icon size={20} color="#814ac8" className="mx-auto mb-1" />
          <span className="text-neutral-surface">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ActionToolbar;
