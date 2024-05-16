import Echo from './app.js';

async function main(){
    const { value } = await Echo.echo({ value: 'Hello World!' });
    console.log('Response from native:', value);
}
main();