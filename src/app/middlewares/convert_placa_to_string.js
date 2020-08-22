async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.textDetection('./src/app/Images/placa2.jpeg');
  const regex = /[0-9]/
  const labels = result.textAnnotations;
  const placa = []
  labels.forEach(label => {
    if ( regex.test(label.description) ) {
      placa.push(label.description)
    }
  });
  console.log(placa[1])
}
export default quickstart;

