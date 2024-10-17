"use client"; // This is a client component 👈🏽

import React, { Component } from 'react';
import wipIcon from '../../Icon/WIP.png';

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
        <div style={styles.container}>
            {/* Logo */}
            <img
                src="https://i.postimg.cc/d02NfQDz/logounisson.png"
                alt="Eglise Unisson"
                style={styles.logo}
            />

            {/* WIP Image */}
            <img
                src="https://i.postimg.cc/kXvsQY6y/WIP.png"
                alt="WORK IN PROGRESS"
                style={styles.wipImage}
            />

            {/* Information Section */}
            <div style={styles.infoBox}>
                <p style={styles.infoText}>
                    Version mobile en cours de développement.<br />Pour visualiser l&apos;article, cliquez sur la version Web.
                </p>

                {/* Asset Information */}
                <div style={styles.assetInfo}>
                    <strong>Vous avez scanné l&apos;article ID : {asset.id}</strong>
                </div>

                {/* Button Link */}
                <a
                    href={`${asset.baseURL}/${asset.id}`}
                    style={styles.button}
                >
                    Cliquez ici pour visualiser la version Web
                </a>
            </div>

            {/* Footer Information */}
            <div style={styles.footer}>
                <strong><div style={styles.separator}>INFORMATION</div></strong>
                <p><strong>V0.1</strong> de l&apos;application de gestion du parc matériel de l&apos;église Unisson.</p><br/>
                <p>
                    Cette version a pour but de recenser l&apos;ensemble du matériel et de faire le lien vers sa page produit <b><i>assets.egliseunisson.fr</i></b>.<br />
                    Pour vous logger à cette application en suivant le lien ce-dessus, vous devez préalablement avoir reçu une invitation par mail.<br />
                </p><br />
                <p>
                    <strong>Contacts : Jonathan F. / Ludovic S.</strong><br /><br />
                </p>
                <strong>A venir :</strong> l&apos;affiche des caractéristiques du matériel scanné se fera directement depuis cette page courant <strong>2025</strong>.
            </div>
        </div>
    );
  }
}

/* restylage à l'arrache*/

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center' as 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        backgroundColor: '#f7f7f7',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto',
    },
    logo: {
        width: '150px',
        marginBottom: '20px',
    },
    wipImage: {
        width: '300px',
        marginBottom: '20px',
    },
    infoBox: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        width: '100%',
    },
    infoText: {
        fontSize: '16px',
        marginBottom: '10px',
    },
    assetInfo: {
        fontSize: '18px',
        fontWeight: 'bold' as 'bold',
        marginBottom: '10px',
    },
    button: {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s',
    },
    footer: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
    },
    separator: {
        fontSize: '14px',
        color: '#999',
        marginBottom: '10px',
    },
};

export default AssetComponent;
