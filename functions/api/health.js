export async function onRequest() {
  return Response.json({
    app: "BLOXERA",
    backend: "online"
  });
}
