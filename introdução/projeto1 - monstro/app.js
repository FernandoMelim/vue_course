var a = new Vue({
    el: '#vueInstance',
    data: {
        playerLife: 100,
        monsterLife: 100,
        playerLifeStyle: { width: 100 + '%' },
        monsterLifeStyle: { width: 100 + '%' },
        result: "",
        logs: [],
        isStarted: false
    },
    methods: {
        attack() {
            if (this.result != "") {
                this.reset();
            } else {
                var playerAttack = Math.floor(Math.random() * (12 - 7)) + 7;;
                this.monsterLife -= playerAttack;
                this.addLog(playerAttack, 0, true);

                var monsterAttack = this.monsterAttack();
                this.playerLife -= monsterAttack;
                this.addLog(monsterAttack, 0, false);

                this.verifyWinner();
            }
        },
        especialAttack() {
            if (this.result != "") {
                this.reset();
            } else {
                var playerAttack = Math.floor(Math.random() * (20 - 12)) + 12;
                this.monsterLife -= playerAttack;
                this.addLog(playerAttack, 0, true);

                var monsterAttack = this.monsterAttack();
                this.playerLife -= monsterAttack;
                this.addLog(monsterAttack, 0, false);

                this.verifyWinner();
            }
        },
        heal() {
            if (this.result != "") {
                this.reset();
            } else {
                if (this.playerLife < 100) {
                    var heal = Math.floor(Math.random() * (15 - 10)) + 10;
                    this.playerLife += heal;
                    this.addLog(0, heal, true);

                    var monsterAttack = this.monsterAttack();
                    this.playerLife -= monsterAttack;
                    this.addLog(monsterAttack, 0, false);
                }
            }
        },
        surrender() {
            if (this.result != "") {
                this.reset();
            } else {
                this.playerLife = 0;
                this.verifyWinner();
                this.addLog(0, 0, false, true);
            }
        },
        verifyWinner() {
            if (this.playerLife <= 0) {
                this.playerLife = 0;
                this.result = "Você perdeu!";
                this.isStarted = false;
            }

            if (this.monsterLife <= 0) {
                this.monsterLife = 0;
                this.result = "Você ganhou!";
                this.isStarted = false;
            }
        },
        monsterAttack() {
            return Math.floor(Math.random() * (12 - 10)) + 10;
        },
        reset() {
            this.monsterLife = 100;
            this.playerLife = 100;
            this.logs = [];
            this.result = "";
        },
        addLog(damage, heal, isPlayer, isSurrender) {
            if (damage > 0) {
                if (isPlayer) {
                    this.logs.unshift({
                        message: "O player deu " + damage + " de dano.",
                        style: {
                            'background-color': "lightblue"
                        }
                    });
                } else {
                    this.logs.unshift({
                        message: "O monstro deu " + damage + " de dano.",
                        style: {
                            'background-color': "red"
                        }
                    });
                }
            } else if (heal > 0) {
                this.logs.unshift({
                    message: "O player se curou em " + heal + " pontos.", style: {
                        'background-color': "green"
                    }
                });
            } else if (isSurrender) {
                this.logs.unshift({
                    message: "O player se rendeu.",
                    style: {
                        'background-color': "grey"
                    }
                });
            }
        },
        start(){
            this.isStarted = true;
            this.reset();
        }
    }
});
