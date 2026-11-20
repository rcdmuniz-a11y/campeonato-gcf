import React from 'react';
import {
  RotateCw,
  SwitchCamera,
} from 'lucide-react';

interface TopBarProps {
  onSwitchCamera: () => void;
  onRotateFrame: () => void;
  photoCount: number;
}

export const TopBar: React.FC<TopBarProps> = ({
  onSwitchCamera,
  onRotateFrame,
}) => {
  return (
    <header
      id="camera_top_bar"
      className="absolute top-0 left-0 right-0 z-30 flex items-center justify-end px-3 sm:px-5 pb-3 bg-gradient-to-b from-black/85 via-black/45 to-transparent text-white select-none pointer-events-auto"
      style={{
        paddingTop: 'max(14px, env(safe-area-inset-top, 14px))',
        paddingLeft: 'max(12px, env(safe-area-inset-left, 12px))',
        paddingRight: 'max(12px, env(safe-area-inset-right, 12px))',
      }}
    >
      {/* Right: Camera Flip */}
      <div className="flex items-center gap-2">
        <button
          id="btn_rotate_frame"
          onClick={onRotateFrame}
          title="Girar solamente el marco"
          className="gcf-frame-adjust flex items-center gap-1.5 rounded-full bg-[#00419c] px-3 py-2 text-[11px] font-semibold text-white border border-orange-200/50 hover:bg-[#0055bd] active:brightness-95 transition-colors"
        >
          <RotateCw size={14} />
          <span>Ajusta el marco</span>
        </button>
        {/* Flip camera */}
        <button
          id="btn_flip_camera"
          onClick={onSwitchCamera}
          title="Cambiar cámara frontal / trasera"
          className="p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white active:scale-95 transition-all"
        >
          <SwitchCamera size={16} />
        </button>

      </div>
    </header>
  );
};
