"use client"; // This is a client component 👈🏽

import AssetComponent from '../../lib/assets'

export default function Page({ params }: { params: { assetId: string } }) {
  return <AssetComponent assetId={params.assetId}/>
}