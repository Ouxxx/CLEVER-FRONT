<template>
    <div class="als-container" id="demo1">
  <span class="als-prev"><img src="assets/forms_question_mark.png" alt="prev" title="previous" /></span>
  <div class="als-viewport">
    <ul class="als-wrapper">
      <li class="als-item"><img src="assets/testing/naruto.jpg" alt="orange" title="orange" />orange</li>
      <li class="als-item"><img src="assets/testing/naruto.jpg" alt="orange" title="orange" />orange</li>
      <li class="als-item"><img src="assets/testing/naruto.jpg" alt="orange" title="orange" />orange</li>
      <li class="als-item"><img src="assets/testing/naruto.jpg" alt="orange" title="orange" />orange</li>
      <li class="als-item"><img src="assets/testing/naruto.jpg" alt="orange" title="orange" />orange</li>
      <li class="als-item"><img src="assets/testing/naruto.jpg" alt="orange" title="orange" />orange</li>
      <li class="als-item"><img src="assets/testing/naruto.jpg" alt="orange" title="orange" />orange</li>
      <li class="als-item"><img src="assets/testing/naruto.jpg" alt="orange" title="orange" />orange</li>
      <li class="als-item"><img src="assets/testing/naruto.jpg" alt="orange" title="orange" />orange</li>
      <li class="als-item"><img src="assets/testing/naruto.jpg" alt="orange" title="orange" />orange</li>
      <li class="als-item"><img src="assets/testing/naruto.jpg" alt="orange" title="orange" />orange</li>
      <li class="als-item"><img src="assets/testing/naruto.jpg" alt="orange" title="orange" />orange</li>
      <li class="als-item"><img src="assets/testing/naruto.jpg" alt="orange" title="orange" />orange</li>
    </ul>
  </div>
  <span class="als-next"><img src="assets/forms_question_mark.png" alt="next" title="next" /></span>
</div>
</template>

<style lang="stylus" scoped>



.als-container {
	position: relative;
	width: 100%;
	margin: 0px auto;
	z-index: 0;
}

.als-viewport {
	position: relative;
	overflow: hidden;
	margin: 0px auto;
}

.als-wrapper {
	position: relative;
	list-style: none;
}

.als-item {
	position: relative;
	display: block;
	text-align: center;
	cursor: pointer;
	float: left;
}

.als-prev, .als-next {
	position: absolute;
	cursor: pointer;
	clear: both;
}

#demo1 {
	margin: 40px auto;
}

#demo1 .als-item {
	margin: 0px 5px;
	padding: 4px 0px;
	min-height: 120px;
	min-width: 100px;
	text-align: center;
}

#demo1 .als-item img {
	display: block;
	margin: 0 auto;
	vertical-align: middle;
}

#demo1 .als-prev, #demo1 .als-next {
	top: 40px;
}

#demo1 .als-prev {
	left: 200px;
}

#demo1 .als-next {
	right: 200px;
}
</style>