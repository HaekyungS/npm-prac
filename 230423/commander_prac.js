import { program } from 'commander'

program
  .version('v1.0.0')
  .name('Zoes_program')
  .description('이 프로그램은 zoe가 만들고 zoe가 고생한거니까 감사히 여겨 불만은 받지 않는다.')
  .option('-n, --name <name>', 'your name')

program.parse();

// console.log(program)