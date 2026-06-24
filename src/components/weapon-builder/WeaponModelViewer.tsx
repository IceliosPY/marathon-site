import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, useGLTF } from "@react-three/drei";
import type { ItemEntry } from "../../lib/items";

type WeaponModelViewerProps = {
  weapon: ItemEntry;
  fullscreen?: boolean;
};

function WeaponModelPart({ src }: { src: string }) {
  const gltf = useGLTF(src);

  return <primitive object={gltf.scene.clone()} />;
}

export default function WeaponModelViewer({
  weapon,
  fullscreen = false,
}: WeaponModelViewerProps) {
  const parts = weapon.modelParts;

  if (!parts) {
    return (
      <div className="weaponBuilder__modelViewerMissing">
        No 3D model available.
      </div>
    );
  }

  return (
    <div
      className={`weaponBuilder__modelViewer ${
        fullscreen ? "weaponBuilder__modelViewer--fullscreen" : ""
      }`}
    >
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
          premultipliedAlpha: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        camera={{ position: [0, 0, 6], fov: 35 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={4} />
        <directionalLight position={[-5, 2, -5]} intensity={2} />

        <Bounds fit clip observe margin={1.25}>
          <group rotation={[0, Math.PI / 2, 0]}>
            <WeaponModelPart src={parts.body} />
            {parts.sight ? <WeaponModelPart src={parts.sight} /> : null}
            {parts.magazine ? <WeaponModelPart src={parts.magazine} /> : null}
            {parts.barrel ? <WeaponModelPart src={parts.barrel} /> : null}
          </group>
        </Bounds>

        <OrbitControls enablePan={false} enableDamping />
      </Canvas>
    </div>
  );
}