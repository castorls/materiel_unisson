"use client"; // This is a client component 👈🏽

import React, { Component } from 'react';

type Asset = {
  id: String,
  name: String,
  image: String,
  notes: String
}

async function getAsset(id: String) { 
  const asset = {
    id: id,
    name: "asset name",
    image: "https://placekitten.com/g/200/200",
    notes: "Some notes"
  };
  return asset;
}


class AssetComponent extends Component<{assetId: string}, { assetId: string, asset: Asset | null, error: any, loading: boolean }> {
  constructor(props: {assetId: string}) {
    super(props);
    this.state = {
      assetId: props.assetId,
      asset: null,
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const data = await getAsset(this.state.assetId);
      this.setState({ asset: data, loading: false });
    } catch (error) {
      this.setState({ error: error, loading: false });
    }
  }

  render() {
    const { assetId, asset, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if( asset == null){
      return null;
    }
    return (
      <div>
        <div>
          {asset.id}
        </div>
        <div>
          {asset.name}
        </div>
        <div>
          {asset.image}
        </div>
        <div>
          {asset.notes}
        </div>
      </div>
    );
  }
}

export default AssetComponent;