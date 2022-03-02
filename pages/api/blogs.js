let DataList = [];

export default function UploadBlogs(req, res) {
  if (req.method === "POST") {
    const { data } = req.body;
    DataList = [];
    console.log(data);
    DataList.push(data);
    res.status(201).json({
      data: DataList
    })
  }
  if (req.method === "GET") {
    console.log(DataList)
    res.status(200).json({
      data: JSON.stringify(DataList)
    })
  }
}