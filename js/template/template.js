function global_header(){
var html = `
<nav class="fh5co-nav" role="navigation">
		<div class="container">
			<div class="row">
				<div class="col-xs-2">
					<div id="fh5co-logo"><a href="index.html"></a></div>
				</div>
				<div class="col-xs-10 text-right menu-1">
					<ul>
						<li class="active"><a href="index.html">Home</a></li>
						<li><a href="about.html">About</a></li>
						<li class="has-dropdown">
							<a href="services.html">world</a>
							<ul class="dropdown">
								<li><a href="#">全てのワールド</a></li>
								<li><a href="#">コンテスト応募作品</a></li>
								<li><a href="#">cluster用アイテム</a></li>
							</ul>
						</li>
						<li><a href="https://dolphiiiin.booth.pm/">BOOTH</a></li>
						<li><a href="https://twitter.com/Dolphiiiin_">Contact</a></li>
					</ul>
				</div>
			</div>
			
		</div>
	</nav>
`;
document.write(html);
}