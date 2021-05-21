<style>

.index-ripple {
	 position: fixed;
	 display: flex;
	 flex-direction: row;
	 justify-content: center;
	 align-items: center;
     width: 620px;
     height: 620px;
     top: 50%;
     left: 50%;
     margin-left: -310px;
     margin-top: -310px;
}
 .index-ripple::after {
	 opacity: 0;
	 display: flex;
	 flex-direction: row;
	 justify-content: center;
	 align-items: center;
	 position: absolute;
	 top: -8px;
	 left: -8px;
	 right: 0;
	 bottom: 0;
	 content: '';
	 height: 100%;
	 width: 100%;
	 border: 8px solid rgba(0, 0, 0, 0.2);
	 border-radius: 100%;
	 animation-name: ripple;
	 animation-duration: 3s;
	 animation-delay: 0s;
	 animation-iteration-count: infinite;
	 animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);
	 z-index: -1;
}
 .index-ripple::before {
	 opacity: 0;
	 display: flex;
	 flex-direction: row;
	 justify-content: center;
	 align-items: center;
	 position: absolute;
	 top: -8px;
	 left: -8px;
	 right: 0;
	 bottom: 0;
	 content: '';
	 height: 100%;
	 width: 100%;
	 border: 8px solid rgba(0, 0, 0, 0.2);
	 border-radius: 100%;
	 animation-name: ripple;
	 animation-duration: 3s;
	 animation-delay: 0.5s;
	 animation-iteration-count: infinite;
	 animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);
	 z-index: -1;
}
 @keyframes ripple {
	 from {
		 opacity: 1;
		 transform: scale3d(0.75, 0.75, 1);
	}
	 to {
		 opacity: 0;
		 transform: scale3d(1.5, 1.5, 1);
	}
}
 

</style>

<div class="index-ripple"></div>