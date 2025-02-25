const APP_BASE_URL = "https://localhost:3000";
const router = require("express").Router();
const File = require("../models/file");

router.get("/:uuid", async (req, res) => {
  try {
    const file = await File.findOne({ uuid: req.params.uuid });
    if (!file) return res.render("download", { error: "link hasbeen expired" });

    return res.render("download", {
      fileName: file.filename,
      uuid: file.uuid,
      fileSize: file.size,
      downloadLink: `https://localhost:3000/files/download/${file.uuid}`,
    });
  } catch (error) {
    return res.render("download", { error: "something went wrong." });
  }
});

module.exports = router;
