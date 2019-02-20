import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonesModule } from './bones/bones.module';
import { DiceRollerModule } from './dice-roller/dice-roller.module';
import { FleshModule } from './flesh/flesh.module';
import { GroveModule } from './grove/grove.module';
import { PcBuilderModule } from './pc-builder/pc-builder.module';
import { SheetMakerModule } from './sheet-maker/sheet-maker.module';
import { SpellcardMakerModule } from './spellcard-maker/spellcard-maker.module';

@NgModule({
    imports:  [
        CommonModule,
        BonesModule,
        DiceRollerModule,
        FleshModule,
        GroveModule,
        PcBuilderModule,
        SheetMakerModule,
        SpellcardMakerModule
    ],
    declarations: [

    ],
    exports: [

    ]
})
export class ViewsModule { }