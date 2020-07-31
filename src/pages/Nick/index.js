import React, { useState } from 'react';
import './style.css';

function Nick() {

    const metodos = [{ value: 'personal', label: "A partir do seu nome" },
    { value: 'random', label: "Aleatório" },
    { value: 'noun', label: "Nome + Adjectivo" }];

    const [metodo, setMetodo] = useState('personal');

    return (
        <main>
            <h1>Gerador de Nick</h1>
            <form>
                <div className="content-left">
                    <div className="select-block">
                        <select id="metodo" value={metodo} onChange={(e) => (setMetodo(e.target.value))}>
                            {metodos.map((metodo) =>
                                (
                                    <option key={metodo.value} value={metodo.value}>{metodo.label}</option>
                                )
                            )}
                        </select>
                    </div>

                    {metodo === 'personal' &&
                        <>
                            < div className="input-block">
                                <input name="nome" id="nome" />
                            </div>
                            <div className="input-block">
                                <input name="sobreNome" id="sobreNome" />
                            </div>
                        </>
                    }

                    {metodo === 'random' &&
                        <>
                            < div className="input-block">
                                <input name="nome" id="nome" />
                            </div>
                            <div className="input-block">
                                <input name="sobreNome" id="sobreNome" />
                            </div>
                        </>
                    }

                    {metodo === 'noun' &&
                        <>
                            < div className="input-block">
                                <input name="nome" id="nome" />
                            </div>
                            <div className="input-block">
                                <input name="sobreNome" id="sobreNome" />
                            </div>
                        </>
                    }


                </div>
                <div className="content-right">
                    <button type="submit">Gerar</button>
                </div>
            </form>
        </main>
    )
}

export default Nick;