//Quiz Ninja Project
const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
    ];

    //create game namespace

    // const game = {
    //     start(quiz){
    //     this.questions = [...quiz];
    //     this.score = 0;
    //     // main game loop
    //     for(const question of this.questions){
    //     this.question = question;
    //     this.ask();
    //     }
    //     // end of main game loop
    //     this.gameOver();
    //     },
    //     ask(){
    //     const question = `What is ${this.question.name}'s real
    //     ➥ name?`;
    //     const response = prompt(question);
    //     this.check(response);
    //     },
    //     check(response){
    //     const answer = this.question.realName;
    //     if(response === answer){
    //     alert('Correct!');
    //     this.score++;
    //     } else {
    //     alert(`Wrong! The correct answer was ${answer}`);
    //     }
    //     },
    //     gameOver(){
    //     alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    //     }
    //     }

    //     game.start(quiz);

        //this practice

        const me = {
            name: 'Cierra',
            age: 22,
            favoriteFood: 'Navajo Tacos',
            makeFood: function () {
                console.log(`You have made ${this.favoriteFood}`)
            }
        }

        me.makeFood();