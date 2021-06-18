
import { render, screen } from '@testing-library/react';
import SwEntry from './SwEntry';

test('check Characters single item entry', () => {
    const dataType = "characters";
    const entry = {
        name: 'Han Solo',
        birth_year: '123BBE',
        gender: 'male',
        height: '180'
    };

    render(<SwEntry type={dataType} data={entry}/>);

    const entryData = screen.getByText(/Han Solo/i);
    expect(entryData).toBeInTheDocument();
});

test('check Movies single item entry', () => {
    const dataType = "movies";
    const entry = {
        title: 'The Empire strikes back',
        director: 'George Lucas'
    };

    render(<SwEntry type={dataType} data={entry}/>);

    const entryData = screen.getByText(/George Lucas/i);
    expect(entryData).toBeInTheDocument();
});

test('check Starships single item entry', () => {
    const dataType = "starships";
    const entry = {
        name: 'Han Solo',
        birth_year: '123BBE',
        gender: 'male',
        height: '180'
    };

    render(<SwEntry type={dataType} data={entry}/>);

    const entryData = screen.getByText(/Han Solo/i);
    expect(entryData).toBeInTheDocument();
});

test('check Planets single item entry', () => {
    const dataType = "planets";
    const entry = {
        name: 'Han Solo',
        birth_year: '123BBE',
        gender: 'male',
        height: '180'
    };

    render(<SwEntry type={dataType} data={entry}/>);

    const entryData = screen.getByText(/Han Solo/i);
    expect(entryData).toBeInTheDocument();
});

test('check Vehicles single item entry', () => {
    const dataType = "vehicles";
    const entry = {
        name: 'Han Solo',
        birth_year: '123BBE',
        gender: 'male',
        height: '180'
    };

    render(<SwEntry type={dataType} data={entry}/>);

    const entryData = screen.getByText(/Han Solo/i);
    expect(entryData).toBeInTheDocument();
});

test('check Species single item entry', () => {
    const dataType = "species";
    const entry = {
        name: 'Han Solo',
        birth_year: '123BBE',
        gender: 'male',
        height: '180'
    };

    render(<SwEntry type={dataType} data={entry}/>);

    const entryData = screen.getByText(/Han Solo/i);
    expect(entryData).toBeInTheDocument();
});