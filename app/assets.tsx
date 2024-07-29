export async function getAsset(id: String) { 
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