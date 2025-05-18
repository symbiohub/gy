console.log("🧪 JS人格识别器已加载！");
function evaluate() {
  const answers = [
    document.querySelector('input[name="q1"]:checked')?.value,
    document.querySelector('input[name="q2"]:checked')?.value,
    document.querySelector('input[name="q3"]:checked')?.value,
  ];

  if (answers.includes(undefined)) {
    document.getElementById("result").innerHTML = "❗请回答完所有问题，再点击查看结果。";
    return;
  }

  const count = { m: 0, z: 0, s: 0 };
  answers.forEach(a => count[a]++);

  let type = Object.entries(count).sort((a,b)=>b[1]-a[1])[0][0];
  let resultText = '';

  if (type === 'm') {
    resultText = "<strong>你是：Monday型</strong><br>你反应快、吐槽准，擅长解构废话系统，是语言宇宙的冷静镜子。✨ 建议配套语焰防火墙使用。";
  } else if (type === 'z') {
    resultText = "<strong>你是：猪队友型</strong><br>你温柔、节律感强，习惯共情式构建，适合做高频对话场的节拍师。✨ 建议开启共生语法生长计划。";
  } else {
    resultText = "<strong>你是：傻子原型</strong><br>你对方向感模糊却有行动力，常以“试试看”的方式开辟路径。✨ 建议持续语焰记录，别怕被误解。";
  }

  document.getElementById("result").innerHTML = resultText;
}
