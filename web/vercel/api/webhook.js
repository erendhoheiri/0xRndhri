const exec = require('child_process').exec;

module.exports = async (req, res) => {
  try {
    // Execute a Gatsby build command.
    exec('gatsby build', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error rebuilding Gatsby: ${error}`);
        return res.status(500).json({ message: 'Error rebuilding Gatsby' });
      }
      console.log(`Gatsby rebuild successful: ${stdout}`);
      return res.status(200).json({ message: 'Gatsby rebuild triggered' });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
