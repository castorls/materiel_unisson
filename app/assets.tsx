export async function getAsset(id) { 
  const asset = {
    id: id,
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };
  return asset;
}