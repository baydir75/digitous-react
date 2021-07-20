import React from 'react';
class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span style={{ color: this.props.color }} className="material-icons">
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>

                {this.props.unit !== "L" && this.props.unit !== "steps" ? <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onInput={this.props.onChange} onChange={this.props.calculate} /> : null}
                {this.props.unit === "steps" ? <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onInput={this.props.onChange} onChange={this.props.calculate} step={1000} /> : null}
            </div>
        )
    }
}

export default Box;