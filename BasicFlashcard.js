BasicFlashcard = function(front, back){
	this.front = front;
	this.back = back;

}

BasicFlashcard.prototype.question = function(question_argument) {
	// body...
	return this.front;
};

BasicFlashcard.prototype.answer = function(answer_argument) {
	// body...
	return this.back;
};


module.exports = BasicFlashcard;