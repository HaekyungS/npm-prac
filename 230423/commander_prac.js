import { program } from 'commander'

program
  .version('1.0.0','-v, --version')
  .name('cli')
  .description('이 프로그램은 zoe가 만들고 zoe가 고생한거니까 감사히 여겨 불만은 받지 않는다.')
  .option('-n, --name <name>', 'your name')

program.parse(process.argv);

// console.log(pronpm gram)
// npx cli -v 하면 되는 거 처럼 하곤 파일로 이동만 됨.
