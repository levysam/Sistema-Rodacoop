async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.textDetection('./src/app/Images/teste.jpeg');
  const regex = /[0-9]/
  const labels = result.textAnnotations;
      console.log(labels[0].description)
}
export default quickstart;

