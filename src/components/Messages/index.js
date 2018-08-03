import React, { Component } from 'react';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';

class Message extends Component {
	_renderMessageOfType(type) {
		switch (type) {
			case 'text':
				return <TextMessage {...this.props.message} />;
			case 'emoji':
				return <EmojiMessage {...this.props.message} />;
		}
	}

	render() {
		const
			{ author, icon, type } = this.props.message,
			contentClassList = [
				'sc-message--content',
				(author === 'me' ? 'sent' : 'received'),
			],
			style = { backgroundImage: `url(${icon || 'https://dash.pathdna.com/images/userIcon.png'})` };

		return (
			<div className="sc-message">
				<div className={contentClassList.join(' ')}>
					<div className="sc-message--avatar" style={style} />
					{this._renderMessageOfType(type)}
				</div>
			</div>);
	}
}

export default Message;
