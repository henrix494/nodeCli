import confirm from '@inquirer/confirm';
export const start =  async() => {
    const answer = await confirm({ message: 'Do you want to play?' });
    return answer;
}
