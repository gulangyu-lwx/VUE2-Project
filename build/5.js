function addEmptyChildren(obj) {
    if (typeof obj !== 'object') {
      return;
    }
  
    // 如果是数组，则递归遍历每个元素
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        addEmptyChildren(obj[i]);
      }
    } else {
      // 遍历对象的属性
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          // 如果属性是一个对象，则递归检查该对象的 "children" 属性
          if (typeof obj[key] === 'object') {
            addEmptyChildren(obj[key]);
          }
        }
      }
  
      // 检查是否存在 "children" 属性，如果不存在则添加一个空的数组
      if (!obj.hasOwnProperty('children')) {
        obj.children = [];
      }
    }
  }
  
  // 示例用法
  const data = [
    {
      id: 1,
      name: 'John',
      children: [
        { id: 2, name: 'Mary' },
        { id: 3, name: 'Tom', children: [{ id: 4, name: 'Jerry' }] }
      ]
    },
    { id: 5, name: 'Kate' },
    { id: 6, name: 'Mike', children: { id: 7, name: 'Lisa' } }
  ];
  
  addEmptyChildren(data);
  
  console.log(JSON.stringify(data, null, 2));
  