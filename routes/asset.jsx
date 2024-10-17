import { useLoaderData } from "react-router-dom";
import { getAsset } from "../app/lib/assets";

export async function loader({ params }) {
  const asset = await getAsset(params.assetId);
  return { asset };
}

export default function Asset() {
  const { asset } = useLoaderData();
  return (
        <div class="asset">
            {asset.id}
        </div>
    );
}