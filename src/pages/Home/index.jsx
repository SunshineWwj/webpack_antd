import React from "react";
import { Checkbox, Card, Divider} from 'antd';
import CheckBoxPanel from "../../components/CheckBoxPanel";

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
const options = [
    {
        value: 1,
        text: '第一个'
    },
    {
        value: 2,
        text: '第二个'
    },
    {
        value: 3,
        text: '第三个'
    },
    {
        value: 4,
        text: '第四个'
    },
    {
        value: 5,
        text: '第五个'
    }
];
class Index extends React.Component{
    state = {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
        text: [1, 4]
    };
    onChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        });
    };

    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    };
    onChangeCheckBoxPanel = (value, name) => {
        this.setState({
            [name]: value
        })
    };
    render() {
        return (
            <div>
                <Card>
                    <div className="site-checkbox-all-wrapper">
                        <Checkbox
                            indeterminate={this.state.indeterminate}
                            onChange={this.onCheckAllChange}
                            checked={this.state.checkAll}
                        >
                            Check all
                        </Checkbox>
                    </div>
                    <br />
                    <CheckboxGroup
                        options={plainOptions}
                        value={this.state.checkedList}
                        onChange={this.onChange}
                    />
                </Card>
                <Divider />
                <Card>
                    <CheckBoxPanel name="text" isCancel={true} options={options} value={this.state.text} onChange={this.onChangeCheckBoxPanel}/>
                </Card>
            </div>
        );
    }
}
export default Index