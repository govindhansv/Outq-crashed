import express from "express";

const router = express.Router();

router.get('/dbms', (req, res) => {
    let data = [{ title: "DBMS COMPLETE NOTES", link: "https://www.csmamocollege.in/_files/ugd/8cbac8_9dc5d0324bfd4cbf9cd932af913fddd8.pdf" },
    { title: "UNIT 1", title: "https://www.csmamocollege.in/_files/ugd/8cbac8_ce0b5a3291b94ac0a850a7acfa6a54db.pdf" },
    { title: " UNIT 2", link: " https://www.csmamocollege.in/_files/ugd/8cbac8_7367458f6f354fc2890265fd871428de.pdf" },
    { title: " UNIT 3", link: "https://www.csmamocollege.in/_files/ugd/8cbac8_ea77e26cce0e48829db8d424ea63367e.pdf " },
    { title: " UNIT 4", link: " https://www.csmamocollege.in/_files/ugd/8cbac8_ea77e26cce0e48829db8d424ea63367e.pdf" },
    { title: " UNIT 5", link: " https://www.csmamocollege.in/_files/ugd/8cbac8_d3483e6b56cd47d08af294e3c734e042.pdf" },
    { title: " Lecture Notes", link: "https://www.csmamocollege.in/_files/ugd/8cbac8_7ceb312a0db343bd901703b264d45d40.pdf " },
    { title: " Previous year Q papers", link: " https://www.csmamocollege.in/_files/ugd/8cbac8_ea77e26cce0e48829db8d424ea63367e.pdf" },
    ];
    res.json(data);
});

router.get('/dcof', (req, res) => {
    let data = [{ title: "DS COMPLETE NOTES", link: " " },
    { title: "UNIT 1", title: " " },
    { title: " UNIT 2", link: "     " },
    { title: " UNIT 3", link: " " },
    { title: " UNIT 4", link: "     " },
    { title: " UNIT 5", link: " " },
    { title: " Lecture Notes", link: "  " },
    { title: " Previous year Q papers", link: "     " },
    ];
    res.json(data);
});
router.get('/mp', (req, res) => {
    let data = [{ title: "DS COMPLETE NOTES", link: " " },
    { title: "UNIT 1", title: " " },
    { title: " UNIT 2", link: "     " },
    { title: " UNIT 3", link: " " },
    { title: " UNIT 4", link: "     " },
    { title: " UNIT 5", link: " " },
    { title: " Lecture Notes", link: "  " },
    { title: " Previous year Q papers", link: "     " },
    ];
    res.json(data);
});

router.get('/html', (req, res) => {
    let data = [{ title: " sdf", link: " sdf" }];
    res.json(data);
});
router.get('/sensor', (req, res) => {
    let data = [{ title: " sdf", link: " sdf" }];
    res.json(data);
});
router.get('/java', (req, res) => {
    let data = [{ title: " sdf", link: " sdf" }];
    res.json(data);
});

router.get('/c', (req, res) => {
    let data = [{ title: "C COMPLETE NOTES", link: "https://www.csmamocollege.in/_files/ugd/8cbac8_e46158e4d4f24f89ba7cd327ba5a9b42.pdf " },
    { title: "UNIT 1", title: "https://www.csmamocollege.in/_files/ugd/8cbac8_de76549afaf348e284d073c4431f073d.pdf " },
    { title: " UNIT 2", link: " https://www.csmamocollege.in/_files/ugd/8cbac8_de76549afaf348e284d073c4431f073d.pdf    " },
    { title: " UNIT 3", link: " https://www.csmamocollege.in/_files/ugd/8cbac8_de76549afaf348e284d073c4431f073d.pdf" },
    { title: " UNIT 4", link: "    https://www.csmamocollege.in/_files/ugd/8cbac8_0a7ed53ecbee4d7dba5dbe7c6df43117.pdf " },
    { title: " UNIT 5", link: "https://www.csmamocollege.in/general-6 " },
    { title: " Lecture Notes", link: " https://www.csmamocollege.in/_files/ugd/8cbac8_624756de32b04308a34a063101b2bf4e.pdf " },
    { title: " Previous year Q papers", link: "  https://drive.google.com/file/d/1hcjh34uuwP4TCKMTBYyIUkDc36g-NWH_/view?usp=sharing   " },
    ];
    res.json(data);
});

router.get('/php', (req, res) => {
    let data = [{ title: " Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a  language due to its comprehensive standard library", link: " sdf" }];
    res.json(data);
});

router.get('/ds', (req, res) => {
    let data = [{ title: "DS COMPLETE NOTES", link: "https://www.csmamocollege.in/_files/ugd/8cbac8_6f24cf83d326473395bfed1c5b4315b0.pdf " },
    { title: "UNIT 1", title: " https://www.csmamocollege.in/_files/ugd/8cbac8_97db1c7933e649869cd13ea905c96381.pdf" },
    { title: " UNIT 2", link: "   https://www.csmamocollege.in/_files/ugd/8cbac8_39b607a2358b414ea3411da26e7d1604.pdf  " },
    { title: " UNIT 3", link: "https://www.csmamocollege.in/_files/ugd/8cbac8_911c9ea6af914ffe8590f5c620732e63.pdf " },
    { title: " UNIT 4", link: "  https://www.csmamocollege.in/_files/ugd/8cbac8_48944540208e407b92393c734e5efb42.pdf   " },
    { title: " UNIT 5", link: " https://www.csmamocollege.in/_files/ugd/8cbac8_9a7bddc13874412283fca8216555b424.pdf" },
    { title: " Lecture Notes", link: " https://www.csmamocollege.in/_files/ugd/8cbac8_65a12ff508404c77a9f9f68eda0766fe.pdf " },
    { title: " Previous year Q papers", link: "   https://drive.google.com/file/d/1i16EQ6g-9Zg7kZbGbaWgURmvM18VEucI/view?usp=sharing  " },
    ];
    res.json(data);
});

router.get('/python', (req, res) => {
    let data = [{ title: " sdf", link: " sdf" }];
    res.json(data);
});
router.get('/cg', (req, res) => {
    let data = [{ title: " sdf", link: " sdf" }];
    res.json(data);
});
router.get('/cn', (req, res) => {
    let data = [{ title: " sdf", link: " sdf" }];
    res.json(data);
});
router.get('/co', (req, res) => {
    let data = [{ title: " sdf", link: " sdf" }];
    res.json(data);
});
router.get('/os', (req, res) => {
    let data = [{ title: " sdf", link: " sdf" }];
    res.json(data);
});
router.get('/dc', (req, res) => {
    let data = [{ title: " sdf", link: " sdf" }];
    res.json(data);
});
router.get('/android', (req, res) => {
    let data = [{ title: " sdf", link: " sdf" }, { title: " sdf", link: " sdf" }];
    res.json(data);
});

/*
Scaffold(
    body: ListView.builder(
      itemCount: 10,
      itemBuilder: (BuildContext context, int index) {
        return ListTile(
          title: Text('Item $index'),
          subtitle: Text('This is item number $index'),
          leading: Icon(Icons.ac_unit),
          trailing: Icon(Icons.arrow_forward),
          onTap: () {
            print('Item $index tapped');
          },
        );
      },
    ),
  ),
   */

export default router;
