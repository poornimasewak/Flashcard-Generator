ClozeFlashcard = function(partialText, deletedText){
	this.partialText = partialText;
	this.deletedText = deletedText;
}

ClozeFlashcard.prototype.question = function(partial_argument) {
	// body...
	return this.partialText;
};

ClozeFlashcard.prototype.cloze = function(deleted_argument) {
	// body...
	return this.deletedText;
};

module.exports = ClozeFlashcard;