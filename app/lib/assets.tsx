"use client"; // This is a client component 👈🏽

import React, { Component } from 'react';

type Asset = {
  id: String,
  name: String,
  baseURL: String,
  notes: String
}

async function getAsset(id: String) { 
  const asset = {
    id: id,
    name: "asset name",
      baseURL: "https://assets.egliseunisson.fr/hardware",
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
                ========= DISCLAIMER ========= <br />
                Cette page est une version en développement de l'application de gestion du matériel Unisson.
                <br />
                Cette version permet l'étiquetage du matériel et un renvoi vers sa page snipe-it.
                <br />
                Le développement de l'affichage via cette surcouche se fera en 2025.
                <br />
                Contacts : Jonathan F. / Ludovic S.
                <br />
                ============================== <br />
            </div>
            <br/>
            <div>
              Vous avez scanne l'asset ID : {asset.id}
            </div>
            <br />
        <a href={`${asset.baseURL}/${asset.id}`}>CLIQUER ICI POUR SUIVRE LE LIEN VERS L'ASSET SNIPE IT</a>
      </div>
    );
  }
}

export default AssetComponent;