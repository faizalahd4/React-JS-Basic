import React from 'react';

class Post extends React.Component {
	constructor (props) {
	     super();
	     this.state = {
	         data: []
	     }
	 }

	componentDidMount() {
        var self = this;
        $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
        	if (data) {
	            self.setState({
	            	data: data
	          	});
	        }
        });
	}

	sortByUserName() {
		this.state.data.sort(function(a, b) {
		    var textA = a.title.toUpperCase();
		    var textB = b.title.toUpperCase();
		    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});
		this.forceUpdate();
	};

	sortById() {
		this.state.data.sort(function(a,b) {
			return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);
		}); 
		this.forceUpdate();
	}

    render() {
        return (
        	<div class="home-section">
        	<div className="btn-container text-right">
        		<button className="btn-pr" onClick={() => this.sortByUserName()}>Sort by Title</button>
        		<button className="btn-pr" onClick={() => this.sortById()}>Sort by Id</button>
        	</div>
        	<table cellpadding="0" cellspacing="0" class="table-style-1">
        	<tr>
        		<th>User Id</th>
        		<th>Id</th>
        		<th>Title</th>
        		<th>Body</th>
        	</tr>
        	{this.state.data.map((obj, index) => 
        		<tr key={index}>
        			<td align="center" width="60">{obj.userId}</td>
        			<td align="center" width="60">{obj.id}</td>
        			<td align="left">{obj.title}</td>
        			<td align="left">{obj.body}</td>
        		</tr>
        	)}
        	</table>
        	</div>
        );
    }
}

export default Post;