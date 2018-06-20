				'use strict'
				let button = document.getElementById("button-2");
				let button2 = document.getElementById("button-3");
				let button3 = document.getElementById("button-4");
				let select = document.getElementById("select");
				let text  = document.getElementById("text-1");
				let text2 = document.getElementById("text-2");
				let date = document.getElementById("date");
				let div = document.getElementById("div1");
				let c;
				let c1;
				let d1;
				let b;
				let b1;
				let b2;

				let h1 = document.createElement("h1");

				let l = localStorage.getItem("date");
				if(l!=undefined){
					b1 = l;
					date.value = l;
				};
				let l1 = localStorage.getItem("select");
				if(l1!=undefined){
					select.value = l1;
				};
				let l2 = localStorage.getItem("text");
				if(l2!=undefined){
					b = l2;
					text.value = l2;
				};
				let l3 = localStorage.getItem("pre-last");
				if(l3!=undefined){
					c1 = l3;
					c1 = +c1;
				};
				let l4 = localStorage.getItem("today");
				if(l4!=undefined){
					b2 = l4;
					b2 = +b2;
					text2.value = l4;
				};
				let l5 = localStorage.getItem("last");
				if(l5!=undefined){
					c = l5;
					c = +c;
				};
				if(c!=undefined&select.value!=undefined){
					div.appendChild(h1).innerHTML = "Завтра вам стоит потратить не больше " +Math.round(c) +select.value;
				};

				function isDigit(str) {
					return str && !/[^\d]/.test(str);
				};

				button3.addEventListener('click', function(){
					localStorage.removeItem('date');
					localStorage.removeItem('select');
					localStorage.removeItem('text');
					localStorage.removeItem('pre-last');
					localStorage.removeItem('today');
					localStorage.removeItem('last');
					localStorage.removeItem('login3965');
					localStorage.removeItem('password3965');
					location.href = 'version 1.0 (1).html';
				});

				button.addEventListener('click', function(){
					
					if((isDigit(text.value)) === true&(isDigit(date.value)) === true){
						let a = text.value;
						b = +a;
						localStorage.setItem('text', b) 
						let d = date.value;
						b1 = +d;
						localStorage.setItem('date', b1);	
						c = b/b1;
						localStorage.setItem('last', c);
						c1 = c;
						localStorage.setItem('pre-last', c1);
						div.appendChild(h1).innerHTML = "Завтра вам стоит потратить не больше " +Math.round(c) +select.value;
					}
					else
					{
						alert("Были введены числа или не было введно ничего.\nПожалуйста введите только цифры.")
					};

				});

				button2.addEventListener('click', function(){
					if(div.appendChild(h1).innerHTML === ""){
						alert("Для начала задайте верхние параметры.");
					}
					else
					{	
						if((isDigit(text2.value)) === true){
							b1=b1-1;
							date.value = b1;
							localStorage.setItem('date', b1);
							if(b1>0){
								let a1 = text2.value;
								b2 = +a1;
								c = +c;
								localStorage.setItem('today', b2);
								if(c<b2){
									d1 = c-b2;
									c = c1;
									localStorage.setItem('last', c);
									c = c+d1;
									localStorage.setItem('last', c);
									alert("Увы! Вы потратили больше нормы на " +Math.round(-d1) +select.value);
									alert("Теперь ваша дозволенная трата на завтра уменьшится на " +Math.round(-d1) +select.value);
									div.appendChild(h1).innerHTML = "Завтра вам стоит потратить не больше " +Math.round(c) +select.value;
								}
								else
								if(c>b2){
									d1 = c-b2;
									c = c1;
									localStorage.setItem('last', c);
									c = c+d1;
									localStorage.setItem('last', c);
									alert("Вау! Вы сэкономили " +Math.round(d1) +select.value);
									alert("Теперь ваша дозволенная трата на завтра увеличится на " +Math.round(d1) +select.value);
									div.appendChild(h1).innerHTML = "Завтра вам стоит потратить не больше " +Math.round(c) +select.value;
								}
								else
								if(c===b2){
									c = c1;
									alert("Так держать! Сегодня вы потратили не больше дозволенного.")
									div.appendChild(h1).innerHTML = "Завтра вам стоит потратить не больше " +Math.round(c) +select.value;
									localStorage.setItem('last', c);

								}
							}
							else
							if(b1===0){
								alert("Поздравляем, вы выжили.");
								text.value = "";
								date.value = "";
								text2.value = "";
								select.value = " руб."; 
								div.appendChild(h1).innerHTML = "";
								localStorage.removeItem('date');
								localStorage.removeItem('select');
								localStorage.removeItem('text');
								localStorage.removeItem('pre-last');
								localStorage.removeItem('today');
								localStorage.removeItem('last');
							};
						}	
						else
						{
							alert("Были введены числа или не было введно ничего.\nПожалуйста введите только цифры.");
						};
					};	
				});
