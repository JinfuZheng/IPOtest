var CONFIG = {
  // your website's title
  document_title: "IPO知识辅导及考题",

  // index page
  index: "README.md",

  // sidebar file
  sidebar_file: "sidebar.md",

  // where the docs are actually stored on github - so you can edit
  base_url: "https://github.com/jinfuzheng/IPOtest/edit/gh-pages",
  // display elements
  sidebar: true,
  edit_button: true,
  back_to_top_button: true,
  save_progress: true, // 保存阅读进度
  search_bar: true,
};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function (key) {
    obj[key] = conf[key];
  });
}

ditto.run();
