/**
 * Created by zawar on 09.05.2017.
 */

import React, {PropTypes, Component } from 'react'

export default class AddQuestionnaire extends Component {

    componentDidMount(){
       //this.props.getAllClientsList(this.props.token)
    }

    render() {

        return <div>
            <h4>Добавление анкеты</h4>

            <form className="form-horizontal">
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Занимались ли вы спортом?</label>
                    <div className="col-sm-10">
                        <div className="radio">
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> Да
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> Нет
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Какую цель ставите перед собой?</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Цель"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Ваши достижения и регалии</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Достижения"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Занималь ли вы кроссфитом?</label>
                    <div className="col-sm-10">
                        <div className="radio">
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> Да
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> Нет
                            </label>
                        </div>
                    </div>
                </div>


                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Как узнали о клубе завод?</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Как узнали"/>
                    </div>
                </div>

                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Как давно болели простудой</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Как давно"/>
                    </div>
                </div>


                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Имеете ли Вы травмы?</label>
                    <div className="col-sm-10">
                        <div className="radio">
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> Да
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> Нет
                            </label>
                        </div>
                    </div>
                </div>


                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Есть ли медицинские противоказания?</label>
                    <div className="col-sm-10">
                        <div className="radio">
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> Да
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> Нет
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label">Ознакомлены ли Вы с правилами клуба?</label>
                    <div className="col-sm-10">
                        <div className="radio">
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> Да
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> Нет
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-success">Сохранить анкету</button>
                        <button type="submit" className="btn btn-default">Отмена</button>
                    </div>
                </div>
            </form>
        </div>
    }
}

AddQuestionnaire.propTypes = {

}
